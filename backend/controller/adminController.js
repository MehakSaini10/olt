import Admin from "../model/adminModel.js"
import Course from "../model/courseModel.js"
import Tutor from "../model/tutorModel.js"
import Student from "../model/studentModel.js"
import Application from "../model/ApplicationModel.js"

//Admin Login
const Login = async (req, res) => {
    try {

        console.log('authadmin');
        const { email, password } = req.body
        console.log(req.body);
        const admin = await Admin.findOne({ email: email })
        if (admin && (await admin.matchPassword(password))) {
            const adminToken = generateToken(admin._id)
            res.status(200).json({ adminToken, message: 'Login successfull' })
        } else {
            res.status(401).json({ message: 'Invalid email or password' })
        }

    } catch (error) {
        console.error('Error in login :', error);
        res.status(500).json({ success: false, message: 'Failed to login ', error: error.message });
    }
}




///Student Management start
const getStudentInfo = async (req, res) => {
    try {

        let studentInfo = await Student.find({})
        res.status(200).json({ studentInfo })
    } catch (error) {
        console.error('Error get studentInfo:', error);
        res.status(500).json({ success: false, message: 'Failed to get studentInfo', error: error.message });
    }
}


const UpdateStudentInfo = async (req, res) => {
    try {
        let Id = req.params.id
        let { name, email, phone } = req.body
        let updateStudentInfo = await Student.updateOne({ _id: Id }, {
            name: name,
            email: email,
            phone: phone
        })
        res.status(200).json({ message: 'Student Info updated successfully' })
    } catch (error) {
        console.error('Error update studentInfo:', error);
        res.status(500).json({ success: false, message: 'Failed to update studentInfo', error: error.message });
    }
}
///Student Management end





///Tutor Management start

const GetTutor = async (req, res) => {
    try {
        console.log('GetTutor controller');
        let tutors = await Tutor.find({})
        res.status(200).json({ tutors })
    } catch (error) {
        console.error('Error get tutor:', error);
        res.status(500).json({ success: false, message: 'Failed to get tutor', error: error.message });
    }
}


const AddTutor = async (req, res) => {
    try {
        console.log('AddTutor controller');

        const { name, email, courseOrSkills, availableTime, endingTime, experience, rating } = req.body
        console.log(req.body);

        const tutor = await Tutor.create({
            name: name,
            course: courseOrSkills,
            email: email,
            availableTime: availableTime, // Convert string to Date object
            endingTime: endingTime, // Convert string to Date object
            expertise: parseInt(experience), // Convert experience to number
            rating: parseInt(rating) // Convert rating to number
        });

        console.log(tutor);
        res.status(201).json({ message: 'Tutor created successfully' });
    } catch (error) {
        // Handle error
        console.error('Error adding tutor:', error);
        res.status(500).json({ success: false, message: 'Failed to add tutor', error: error.message });
    }
}



const UpdateTutor = async (req, res) => {
    try {
        console.log('UpdateTutor controller', req.id,);
        console.log('UpdateTutor controller', req.body,);
        const { name, email, course, availableTime, endingTime, expertise, rating } = req.body
        let updateTutor = await Tutor.updateOne({ _id: req.body._id }, {
            name: name,
            email: email,
            course: course,
            availableTime: availableTime,
            endingTime: endingTime,
            expertise: expertise,
            rating: rating
        })

        res.status(201).json({ message: 'Tutor Updated successfully' });


    } catch (error) {
        console.error('Error Updating tutor:', error);
        res.status(500).json({ success: false, message: 'Failed to update tutor', error: error.message });
    }
}
///Tutor Management end




///Course Management start
let GetCourse = async (req, res) => {
    try {
        console.log('get course controller');

        let courses = await Course.find({})
        res.status(200).json({ courses })

    } catch (error) {
        console.error('Error get course:', error);
        res.status(500).json({ success: false, message: 'Failed to get course', error: error.message });
    }
}


let AddCourse = async (req, res) => {
    try {
        console.log('add course controller');
        let { courseName, description, duration, category } = req.body

        let addCourse = await Course.create({
            courseName,
            description,
            duration,
            category
        })
        res.status(200).json({ message: "Course added Successfully" })


    } catch (error) {

        console.error('Error add course:', error);
        res.status(500).json({ success: false, message: 'Failed to add course', error: error.message });
    }
}


let UpdateCourse = async (req, res) => {
    try {

        let { courseName, description, duration, category } = req.body
        let Id = req.params.id
        console.log('update course controller', Id);


        let updateCourse = await Course.updateOne({ _id: Id }, {
            courseName,
            description,
            duration,
            category
        })
        res.status(200).json({ message: "Course updated Successfully" })

    } catch (error) {
        console.error('Error update course:', error);
        res.status(500).json({ success: false, message: 'Failed to update course', error: error.message });
    }
}

let DeleteCourse = async (req, res) => {
    try {

        console.log('delete course controller', req.params.id);

        let courseId = req.params.id
        let deleteCourse = await Course.deleteOne({ _id: courseId })
        res.status(200).json({ message: "Course deleted Successfully" })

    } catch (error) {
        console.error('Error delete course:', error);
        res.status(500).json({ success: false, message: 'Failed to delete course', error: error.message });
    }
}
///Course Management end



///Application Management start

let GetApplication = async (req, res) => {
    try {

        let application = await Application.find({})

        res.status(200).json({ application })
    } catch (error) {
        console.error('Error get application:', error);
        res.status(500).json({ success: false, message: 'Failed to get application', error: error.message });
    }
}


let ApplicationReject = async (req, res) => {
    try {


    } catch (error) {
        console.error('Error reject application:', error);
        res.status(500).json({ success: false, message: 'Failed to reject application', error: error.message });
    }
}


let ApplicationAccept = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error accept application:', error);
        res.status(500).json({ success: false, message: 'Failed to accept application', error: error.message });
    }
}
///Application Management end

const getApplication = async (req, res) => {
    try {
        console.log('get application in controoler');
        let Applicants = await Application.find({})
        console.log(Applicants, 'this is Applicants controlller');
        res.status(201).json({ Applicants })

    } catch (error) {
        res.status(500).json({ error: 'An error occured while processing your get Tutors details for student.' })

    }
}

const rejectApplication = async (req, res) => {
    try {
        let Id = req.params.id
        let rejectApplicants = await Application.updateOne({ _id: Id }, { status: false })
        res.status(201).json({ message: 'Application Rejected' })

    } catch (error) {
        res.status(500).json({ error: 'An error occured while processing your get Tutors details for student.' })

    }
}
const acceptApplication = async (req, res) => {
    try {
        let Id = req.params.id

        let acceptApplicant = await Application.updateOne({ _id: Id }, { status: true })
        res.status(201).json({ message: 'Application Accepted' })

    } catch (error) {
        res.status(500).json({ error: 'An error occured while processing your get Tutors details for student.' })

    }
}

export {
    Login,
    getStudentInfo,
    UpdateStudentInfo,
    GetTutor,
    AddTutor,
    UpdateTutor,
    GetCourse,
    AddCourse,
    UpdateCourse,
    DeleteCourse,
    GetApplication,
    ApplicationReject,
    ApplicationAccept,
    getApplication,
    rejectApplication,
    acceptApplication

}