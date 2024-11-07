import { useParams, useLocation, useSearchParams } from "react-router-dom";

function AboutCourses() {
  const { courses } = useParams();
  const res = useLocation();
  console.log(res);

  const result = useSearchParams();
  console.log(result);
  return (
    <div>
      <h2>{courses}</h2>
    </div>
  );
}

export default AboutCourses;
