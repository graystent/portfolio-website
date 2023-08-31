import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nhsImg from "@/public/NHS.jpeg"
import edfImg from "@/public/EDF.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Manchester, UK",
    description:
      "I worked for local consultancy who were acquired by Accenture. Whilst working here I was involved in two major projects, one for a goverment service and the other for an international energy provider.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Manchester, UK",
    description:
      "I graduated after 3 months of studying and began searching for a job as a full-stack developer whilst maintaining my role with NatWest Bank.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  }
] as const;

export const projectsData = [
  {
    title: "NHS",
    description:
      "I worked as a full-stack developer on a transformation from legacy system to cloud. Used by doctors to pull previous patient visit info and automate letter generation.",
    tags: ["React", "Typescript", "AWS", "Terraform", "GitLab"],
    imageUrl: nhsImg,
  },
  {
    title: "EDF",
    description:
      "I was a front-end developer for a new mobile and desktop applications following Figma designs. User data was retrieved using GraphQL.",
    tags: ["React", "React Native", "TypeScript", "Figma", "GraphQL"],
    imageUrl: edfImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "DynamoDB",
  "EC2",
  "Lambda",
  "CloudWatch",
  "S3",
  "API Gateway",
  "VPC",
  "CodeBuild",
  "GraphQL",
  "SQL",
  "Python",
  "Terraform",
  "GitHub Actions",
  "GitLab",
  "AWS Solutions Architect - Associate",
  "PSM1 Scrum Master",
] as const;