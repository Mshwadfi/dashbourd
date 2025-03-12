import StatisticsCard from "@/components/dashboard/StatisticsCard";
import { statistics } from "@/libs/constants";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statistics.map((stat) => (
          <StatisticsCard stat={stat} key={stat.title} />
        ))}
      </div>
    </div>
  );
}
