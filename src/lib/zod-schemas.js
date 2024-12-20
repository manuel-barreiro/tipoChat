import { z } from "zod"

export const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })

export const userSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  nickName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export const signUpSchema = z.intersection(passwordSchema, userSchema)

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
})

export const manageProfileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  nickName: z.string().optional(),
  bio: z.string().optional(),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  email: z.string().email("Enter a valid email address"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
})

export const resetPasswordSchema = z.intersection(
  z.object({ oldPassword: z.string().min(1, "Enter your old password") }),
  passwordSchema
)

export const addLinkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  textUrl: z.string().min(1, "URL is required"),
})

export const roomSchema = z.object({
  title: z.string().min(1, "Title is required"),
  about: z.string().min(1, "Description is required"),
  category: z.enum(["Music", "Entertainment", "Gaming", "Lifestyle"]),
  subCategory: z.enum([
    "Pop",
    "Rock",
    "Jazz",
    "Hip-Hop",
    "Classical",
    "Electronic",
    "Country",
    "Reggae",
  ]),
  language: z.enum(["English", "Spanish"]),
  age: z.enum(["all", "18+", "21+"]),
  type: z.enum(["Public", "Private"]),
  indexRoom: z.boolean(),
  allowEmbed: z.boolean(),
})

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  about: z.string().min(1, "Description is required"),
  type: z.enum(["Music", "Entertainment", "Gaming", "Lifestyle"], {
    errorMap: () => ({ message: "Please select a valid post type" }),
  }),
  price: z.preprocess(
    (val) => (val === "" ? 0 : Number(val)),
    z.number().min(0, "Price must be a non-negative number")
  ),
  link: z.string().url("Enter a valid URL").or(z.literal("")),
  images: z
    .array(z.instanceof(File, { message: "Invalid file type" }))
    .optional()
    .default([]),
})

export const buyPointsSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  method: z.string().min(1, "Method is required"),
})

export const chooseCryptoNetworkSchema = z.object({
  network: z.string().min(1, "Network is required"),
})

export const liveEncoderSchema = z.object({
  server: z.string().min(1, "Server is required"),
  publicKey: z.string().min(1, "Public key is required"),
  privateKey: z.string().min(1, "Private key is required"),
})

export const liveMicSchema = z.object({
  camera: z.string().min(1, "Camera is required"),
  microphone: z.string().min(1, "Microphone is required"),
})
