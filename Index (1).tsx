import ClimbPost from "@/components/ClimbPost";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import climbing1 from "@/assets/climbing-1.jpg";
import climbing2 from "@/assets/climbing-2.jpg";
import climbing3 from "@/assets/climbing-3.jpg";

const posts = [
{
  username: "Tyler Kitching",
  gym: "Hub Climbing",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler",
  image: climbing1,
  caption: "CRIMP MAXXING 💪",
  grade: "6.11-",
  status: "Flashed" as const,
  goes: 1,
  respects: 83,
  comments: 2,
  commentData: [
    { username: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", text: "That's insane dude 🔥", timeAgo: "1h ago" },
    { username: "Josh Edwards", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Josh", text: "Crimp king! Need to try this route", timeAgo: "45m ago" },
  ],
  timeAgo: "2h ago"
},
{
  username: "Sarah Chen",
  gym: "Movement Gym",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  image: climbing2,
  caption: "Finally got my first V5! 🎉",
  grade: "V3",
  status: "Sent" as const,
  goes: 5,
  respects: 64,
  comments: 3,
  commentData: [
    { username: "Tyler Kitching", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler", text: "Congrats!! 🎉🎉", timeAgo: "3h ago" },
    { username: "Josh Edwards", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Josh", text: "Let's go! Next stop V6", timeAgo: "2h ago" },
    { username: "Mia Lopez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia", text: "So proud of you!", timeAgo: "1h ago" },
  ],
  timeAgo: "4h ago"
},
{
  username: "Josh Edwards",
  gym: "Boulder Rock Climbing",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Josh",
  image: climbing3,
  caption: "Another day, another flash!",
  grade: "V5",
  status: "Flashed" as const,
  goes: 2,
  respects: 91,
  comments: 5,
  commentData: [
    { username: "Tyler Kitching", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler", text: "Beast mode 💪", timeAgo: "5h ago" },
    { username: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", text: "What's your secret??", timeAgo: "5h ago" },
    { username: "Mia Lopez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia", text: "Smooth climbing!", timeAgo: "4h ago" },
    { username: "Alex Rivera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", text: "That route is no joke", timeAgo: "3h ago" },
    { username: "Kim Park", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kim", text: "Goals 🙌", timeAgo: "2h ago" },
  ],
  timeAgo: "6h ago"
}];


const Index = () => {
  return (
    <div className="min-h-screen bg-primary-foreground">
      <Header />
      <main className="mx-auto max-w-lg pb-20 pt-4">
        {posts.map((post, i) =>
        <ClimbPost key={i} {...post} />
        )}
      </main>
      <BottomNav />
    </div>);

};

export default Index;