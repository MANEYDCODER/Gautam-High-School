'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { GraduationCap, BookOpen, User, Mail, Lock, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

// Validation schema
const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  grade: Yup.string()
    .required('Please select a grade'),
  parentName: Yup.string()
    .min(2, 'Parent/Guardian name must be at least 2 characters')
    .required('Parent/Guardian name is required'),
  parentPhone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Parent/Guardian phone number is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .required('Address is required'),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  address: string;
}

const RegisterForm = () => {


  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    parentPhone: '',
    address: '',
  };

  const router = useRouter()

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    
  const {data}= await axios.post('http://localhost:9090/register',values)
  toast(data)
  if(data?.isRegistered) router.push('/login')
  };

  return (
    <div className="min-h-screen school-gradient flex items-center justify-center p-4">
      {/* Floating academic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float" />
        <GraduationCap className="absolute top-40 right-20 text-white/20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }} />
        <BookOpen className="absolute bottom-40 left-20 text-white/20 w-12 h-12 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
  {/* Remove margin-bottom to make them closer */}
  <div className="flex justify-center"> {/* Changed from mb-2 to no margin class */}
    <Image className='my-10' src="/ghsnobg.png" alt="School Logo" width={200} height={10}/>
  </div>
  <CardTitle className="text-3xl font-bold text-school-blue mb-2">
    Gautam High School
  </CardTitle>
  <CardDescription className="text-lg text-gray-600 font-medium">
    "Child is the Father of Invention"
  </CardDescription>
  <div className="w-24 h-1 school-gold-gradient mx-auto mt-4 rounded-full"></div>
</CardHeader>

        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={registrationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-school-blue" />
                      First Name
                    </Label>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="border-school-blue/30 focus:border-school-blue"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-destructive text-sm" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </Label>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="border-school-blue/30 focus:border-school-blue"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-destructive text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-school-blue" />
                    Email Address
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="border-school-blue/30 focus:border-school-blue"
                  />
                  <ErrorMessage name="email" component="div" className="text-destructive text-sm" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                      <Lock className="w-4 h-4 text-school-blue" />
                      Password
                    </Label>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      className="border-school-blue/30 focus:border-school-blue"
                    />
                    <ErrorMessage name="password" component="div" className="text-destructive text-sm" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password
                    </Label>
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="border-school-blue/30 focus:border-school-blue"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-destructive text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-school-blue" />
                      Date of Birth
                    </Label>
                    <Field
                      as={Input}
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      className="border-school-blue/30 focus:border-school-blue"
                    />
                    <ErrorMessage name="dateOfBirth" component="div" className="text-destructive text-sm" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-sm font-medium flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-school-blue" />
                      Grade
                    </Label>
                    <Select onValueChange={(value) => setFieldValue('grade', value)}>
                      <SelectTrigger className="border-school-blue/30 focus:border-school-blue">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="kg1">KG 1</SelectItem>
                        <SelectItem value="kg2">KG 2</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                        <SelectItem value="6">Grade 6</SelectItem>
                        <SelectItem value="7">Grade 7</SelectItem>
                        <SelectItem value="8">Grade 8</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="grade" component="div" className="text-destructive text-sm" />
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-school-blue mb-4">Parent/Guardian Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-sm font-medium">
                        Parent/Guardian Name
                      </Label>
                      <Field
                        as={Input}
                        id="parentName"
                        name="parentName"
                        placeholder="Enter parent/guardian name"
                        className="border-school-blue/30 focus:border-school-blue"
                      />
                      <ErrorMessage name="parentName" component="div" className="text-destructive text-sm" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentPhone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Field
                        as={Input}
                        id="parentPhone"
                        name="parentPhone"
                        placeholder="Enter phone number"
                        className="border-school-blue/30 focus:border-school-blue"
                      />
                      <ErrorMessage name="parentPhone" component="div" className="text-destructive text-sm" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-school-blue" />
                    Address
                  </Label>
                  <Field
                    as="textarea"
                    id="address"
                    name="address"
                    placeholder="Enter complete address"
                    className="min-h-[80px] w-full rounded-md border border-school-blue/30 bg-background px-3 py-2 text-sm focus:border-school-blue focus:outline-none focus:ring-2 focus:ring-school-blue/20"
                  />
                  <ErrorMessage name="address" component="div" className="text-destructive text-sm" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-school-blue hover:bg-school-blue/500 text-black font-medium py-3 text-lg transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Register for Gautam High School'}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;