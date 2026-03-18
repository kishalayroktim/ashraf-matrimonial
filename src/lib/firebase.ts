import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAF0kpgdPw-I74eMwBa7tme8LCeI0uW3us",
  authDomain: "ashraf-matrimonial.firebaseapp.com",
  databaseURL: "https://ashraf-matrimonial-default-rtdb.firebaseio.com",
  projectId: "ashraf-matrimonial",
  storageBucket: "ashraf-matrimonial.firebasestorage.app",
  messagingSenderId: "742974202863",
  appId: "1:742974202863:web:580d608266b663c53b8c1a",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function submitRatingToFirebase(categoryId: string, rating: number) {
  const ratingsRef = ref(db, `ratings/${categoryId}`);
  await push(ratingsRef, {
    rating,
    timestamp: Date.now(),
  });
}

export async function getRatingsFromFirebase(): Promise<Record<string, number[]>> {
  const ratingsRef = ref(db, "ratings");
  const snapshot = await get(ratingsRef);
  const result: Record<string, number[]> = {};

  if (snapshot.exists()) {
    const data = snapshot.val();
    for (const categoryId of Object.keys(data)) {
      result[categoryId] = Object.values(data[categoryId]).map(
        (entry: unknown) => (entry as { rating: number }).rating
      );
    }
  }

  return result;
}

export interface UserTestimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  timestamp: number;
}

export async function submitTestimonialToFirebase(
  testimonial: Omit<UserTestimonial, "timestamp">
) {
  const testimonialsRef = ref(db, "testimonials");
  await push(testimonialsRef, {
    ...testimonial,
    timestamp: Date.now(),
  });
}

export async function getTestimonialsFromFirebase(): Promise<UserTestimonial[]> {
  const testimonialsRef = ref(db, "testimonials");
  const snapshot = await get(testimonialsRef);
  const result: UserTestimonial[] = [];

  if (snapshot.exists()) {
    const data = snapshot.val();
    for (const key of Object.keys(data)) {
      result.push(data[key] as UserTestimonial);
    }
  }

  result.sort((a, b) => a.timestamp - b.timestamp);
  return result;
}
