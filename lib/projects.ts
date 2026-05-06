import { supabase } from './supabase'

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')

  if (error) {
    console.log(error)
    return []
  }

  return data
}

export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error(error)
    return null
  }

  return data
}