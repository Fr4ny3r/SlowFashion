import { createClient } from '@supabase/supabase-js'

// Reemplaza con tus propias credenciales (usa variables de entorno en producción)
const supabaseUrl = 'https://btwosfvpkalaisgqxitq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0d29zZnZwa2FsYWlzZ3F4aXRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjkzMTE4MiwiZXhwIjoyMDc4NTA3MTgyfQ.C_4d-0lr5RUss8fR8qyPOqTV_jLZ6oIJUXgsCDd4P3o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)