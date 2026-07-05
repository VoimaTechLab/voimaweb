import { getVolunteerPage } from "@/sanity/sanityService";
import { useEffect, useState } from "react";
import VolunteerImage from "../../assets/Web_red.jpg";
const fallback = {
  eyebrow: "Volunteer",
  title: "Volunteer With Voima",
  description:
    "Help us create awareness, support individuals living with sickle cell and contribute to meaningful community initiatives.",
  image: VolunteerImage,
  imageTitle: "Make an impact in your community.",
  imageDescription:
    "Join passionate volunteers working to improve awareness, education and support for people living with sickle cell.",
};

export function useVolunteerPage() {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    getVolunteerPage()
      .then((res) => {
        if (res) {
          setData({
            ...fallback,
            ...res,
          });
        }
      })
      .catch(() => {
        setData(fallback);
      });
  }, []);

  return data;
}