import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Home() {
  const studentInfo=useSelector((state)=>state.auth)
  console.log(studentInfo,'studentInfo in login component');
  return (
    <div className='h-full min-h-screen flex justify-center items-center' style={{background:"linear-gradient(90deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 67%)"}}
>
    <div className="flex gap-60">
    <Card className="w-[300px]">
    <Link to={'/course'}>
    <CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none  "
  style={{ height: '180px' }} // Set the height to 180px
>
  <img
    src="https://www.investopedia.com/thmb/hK6tkzerVV_WXbbWj4VYKnPANNA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OnlineCourses_Jacek-Kita-e2c9d834d3524d76ac28da76aec203ca.jpg"
    alt="ui/ux review check"
    style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Set the height to 100% to fill the container
  />
</CardHeader>

      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Our Courses
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-thin">
        Unleash your potential and excel with our tailored courses for growth and achievement
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
     
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
      </Link>
    </Card>
    <Card className="w-[300px]">
    <Link to={'/tutor'}>
    <CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none  "
  style={{ height: '180px' }} // Set the height to 180px
>
  <img
    src="https://epe.brightspotcdn.com/dims4/default/f376d62/2147483647/strip/true/crop/2084x1414+37+0/resize/840x570!/format/webp/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F94%2F2d%2F8ed27aa34da0a197b1d819ec39a5%2Fteacher-tutor-student-librarian-1137620335.jpg"
    alt="ui/ux review check"
    style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Set the height to 100% to fill the container
  />
</CardHeader>

      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Tutors
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-thin">
        Tutors: Inspiring doers to follow their dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
      </Link>
    </Card>
    
    </div>
    </div>
  )
}

export default Home
