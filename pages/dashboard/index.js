// SAMPLE 

import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        Your dashboard
      </h1>

      <div className="container mx-auto">
        <div className="pt-2">
          <h2 className="text-2xl font-display font-bold">Weekly Tracks</h2>
          <p>Your most played tracks within the past week.</p>

          <div className="grid grid-cols-6 gap-6 mt-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="pt-2">
          <h2 className="text-2xl font-display font-bold">Weekly Artists</h2>
          <p>The artists you've listened to the most within the past week.</p>

          <div className="grid grid-cols-6 gap-6 mt-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <p className="text-gray-600 float-right">Records saved 7 hours ago.</p>
      </div>
    </>
  );
}