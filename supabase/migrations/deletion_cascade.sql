-- Account deletion cascade (ARCHITECTURE.md: deletion must cascade and remove all child records)
DELETE FROM reading_sessions WHERE child_profile_id = (SELECT id FROM child_profiles WHERE parent_id = ?);
DELETE FROM streaks WHERE child_profile_id = (SELECT id FROM child_profiles WHERE parent_id = ?);
DELETE FROM child_profiles WHERE parent_id = ?;
