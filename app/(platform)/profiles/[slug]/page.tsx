import ProfilePage from "@/pages/profile/ProfilePage";

const Profile = ({ params }: { params: { slug: string } }) => <ProfilePage slug={params.slug} />

export default Profile;