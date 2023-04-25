"use client";
import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this Property is close to the Beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this Property has WindMills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this Property is Modern",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "this Property is CountrySide",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this Property has a Pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this Property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this Property is beside a Lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this Property has Skiing Activity",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "this Property is a Castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this Property is a Camping Site",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "this Property is a Castle",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this Property is a Cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this Property is in a Desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "this Property is Luxurious",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this Property is a Castle",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
