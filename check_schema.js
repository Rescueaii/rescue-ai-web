
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf8');
const getEnv = (key) => {
  const match = envFile.match(new RegExp(`${key}="?([^"\\n]+)"?`));
  return match ? match[1] : null;
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseKey = getEnv('VITE_SUPABASE_PUBLISHABLE_KEY');

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  console.log("Checking 'cases' table structure...");
  
  try {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .limit(1);

    if (error) {
      console.error("Error fetching from cases:", error.message);
      if (error.message.includes("does not exist")) {
        console.log("RESULT: Table 'cases' might not exist or columns are missing.");
      }
    } else if (data) {
      const columns = data.length > 0 ? Object.keys(data[0]) : [];
      console.log("Current columns in 'cases':", columns);
      
      const required = ['location_text', 'latitude', 'longitude', 'location_source'];
      const missing = required.filter(col => !columns.includes(col));
      
      if (missing.length > 0) {
        console.log("RESULT: Missing columns:", missing);
      } else {
        console.log("RESULT: All required columns exist.");
      }
    }
  } catch (err) {
    console.error("Script execution error:", err.message);
  }
}

checkSchema();
