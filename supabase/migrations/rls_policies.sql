-- ReadSpark RLS: parents see only their children's data
CREATE POLICY parent_isolation ON child_profiles FOR SELECT USING (parent_id = auth.uid());
CREATE POLICY parent_isolation ON reading_sessions FOR SELECT USING (parent_id = auth.uid());
CREATE POLICY parent_isolation ON streaks FOR SELECT USING (parent_id = auth.uid());
