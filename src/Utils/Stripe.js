import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  // process.env.VITE_STRIPE_PUBLIC_KEY
  "pk_test_51Q0jnqRwpp3R5DopAC4kPGGhebpJggSjzZroa7sEWd2dpZFyjyupXculhzWDChHlY22aIBdbY7YKOTeCU0KnNGIO00J3F6yhyV"
);
