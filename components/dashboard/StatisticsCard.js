import React from "react";
import { Card } from "../ui/card";

const StatisticsCard = ({ stat }) => {
  return (
    <div>
      <Card key={stat.title} className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>
            <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <stat.icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="mt-4">
          <span
            className={`text-sm font-medium ${
              stat.trendUp ? "text-green-600" : "text-red-600"
            }`}
          >
            {stat.trend}
          </span>
          <span className="text-sm text-muted-foreground ml-1">
            vs last month
          </span>
        </div>
      </Card>
    </div>
  );
};

export default StatisticsCard;
