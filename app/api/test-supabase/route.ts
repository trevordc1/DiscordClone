import { supabase } from '@/lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase
    .from('Test')  // replace with a real table
    .select('*')
    .limit(1)

  console.log('Supabase test data:', data)
  console.log('Supabase test error:', error)

  return new Response(JSON.stringify({ data, error }))
}
