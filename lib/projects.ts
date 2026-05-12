import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')

  if (error) {
    console.log('Supabase error:', error)
    return []
  }

  return data
}