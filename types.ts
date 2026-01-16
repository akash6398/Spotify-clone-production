import Stripe from "stripe"

export interface Song {
  id: string
  user_id: string
  author: string
  title: string
  song_path: string
  image_path: string
}

export interface Product {
  id: string
  active?: boolean
  name?: string
  description?: string
  image?: string
  metadata?: Stripe.Metadata
}

export interface Price {
  id: string
  product_id?: string
  active?: boolean
  description?: string
  unit_amount?: number
  currency?: string
  type?: Stripe.Price.Type
  interval?: Stripe.Price.Recurring.Interval
  interval_count?: number
  trial_period_days?: number | null
  metadata?: Stripe.Metadata
  products?: Product
}

export interface Customer {
  id: string
  stripe_customer_id?: string
}

export interface UserDetails {
  id: string
  first_name: string
  last_name: string
  full_name?: string
  avatar_url?: string
  billing_address?: Stripe.Address
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type]
}

export interface ProductWithPrice extends Product {
  prices?: Price[]
}
export type Database = {
  public: {
    Tables: {
      songs: {
        Row: Song
        Insert: Partial<Song>
        Update: Partial<Song>
      }
      products: {
        Row: Product
        Insert: Partial<Product>
        Update: Partial<Product>
      }
      prices: {
        Row: Price
        Insert: Partial<Price>
        Update: Partial<Price>
      }
      subscriptions: {
        Row: Subscription
        Insert: Partial<Subscription>
        Update: Partial<Subscription>
      }
      customers: {
        Row: Customer
        Insert: Partial<Customer>
        Update: Partial<Customer>
      }
      users: {
        Row: UserDetails
        Insert: Partial<UserDetails>
        Update: Partial<UserDetails>
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}


export interface Subscription {
  id: string
  user_id: string
  status?: Stripe.Subscription.Status
  metadata?: Stripe.Metadata
  price_id?: string
  quantity?: number
  cancel_at_period_end?: boolean
  created: string
  current_period_start: string
  current_period_end: string
  ended_at?: string
  cancel_at?: string
  canceled_at?: string
  trial_start?: string
  trial_end?: string
  prices?: Price
}
