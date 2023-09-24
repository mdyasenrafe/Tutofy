import React from "react";
import { FaUsers, FaBookReader } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

let data = [
  {
    id: 1,
    title: "Users",
    icon: <FaUsers size={30} />,
    value: 100,
  },
  {
    id: 2,
    title: "Courses",
    icon: <FaBookReader size={30} />,
    value: 150,
  },
  {
    id: 3,
    title: "Posts",
    icon: <CgNotes size={30} />,
    value: 130,
  },
];

export default function StatsOverview() {
  return (
    <div className="my-[50px] bg-[#f7f8fc]">
      <Container>
        <Grid container spacing={3} alignItems={"center"}>
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.id} className="py-[50px]">
              <div className="flex items-center">
                <div className="mr-[16px]">{item.icon}</div>
                <div>
                  <h3 className="text-[40px] text-primary">{item.value}+</h3>
                  <p className="text-[18px]">{item.title}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
