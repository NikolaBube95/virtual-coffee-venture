// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nclxjnmrssknvrpvqcnt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbHhqbm1yc3NrbnZycHZxY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODc4NzYsImV4cCI6MjA1MTA2Mzg3Nn0.mUg_AgXEWQp4FB1_GLiijR96qd5yHPrq8SQu3PqUd3I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);