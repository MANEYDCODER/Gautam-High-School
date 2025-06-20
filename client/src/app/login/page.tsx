'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { GraduationCap, BookOpen, Mail, Lock } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addLoginDetails } from '@/redux/reducerSlices/userSlice';

const registrationSchema = Yup.object().shape({
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
});

interface FormValues {
  email: string;
  password: string;
}



const RegisterForm = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
    
  };

  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      const { data } = await axios.post('http://localhost:9090/login', values);
      if(data?.isLoggedIn) router.push('/')
      toast(data?.message || 'Login successful!');
    if (data) {
      dispatch(addLoginDetails(data))
    }

    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
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
          <div className="flex justify-center">
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
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Removed the empty grid div which was previously here */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div> */}

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

                {/* Removed the outer grid div for password field to match email field's structure */}
                <div className="space-y-2"> {/* This now matches the email field's parent div */}
                  <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4 text-school-blue" />
                    Password
                  </Label>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-school-blue/30 focus:border-school-blue"
                  />
                  <ErrorMessage name="password" component="div" className="text-destructive text-sm" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-school-blue hover:bg-school-blue/500 text-black font-medium py-3 text-lg transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Login for Gautam High School'}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Don’t have an account yet?{' '}
                  <Link href="/register" className="text-school-blue underline hover:text-school-blue/80">
                    Register
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;