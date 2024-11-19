"use client"
import React, { useState } from 'react';
import { Input, Button, Spinner } from '@nextui-org/react';  
import Link from 'next/link';
import { API_URL } from '@/constants';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const [submitting, setSubmitting] = useState(false); 
  const router = useRouter(); 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    let authData: any = {
      userEmail: formData.get("userEmail"),
      userPassword: formData.get("userPassword"),
    };
    console.log(formData);

    try {
      const response = await fetch(`${API_URL}/auth/login`,{
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify(authData),
        credentials: 'include',
      });
      if(response.status === 201) router.push('/dashboard');
      setSubmitting(false);
      console.log(response);

    } catch (e) {
      console.error("Error al iniciar sesión:", e);
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <div className="text-2xl md:text-white my-4">
        Iniciar Sesión
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4 items-center">
        <Input
          label="Email"
          name="userEmail"
          type="email"
          isRequired
          size="sm"
          disabled={submitting}
        />
        <Input
          label="Contraseña"
          name="userPassword"
          type="password"
          isRequired
          size="sm"
          disabled={submitting}
        />

        <Button color="primary" type="submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Iniciar sesión"}
        </Button>
      </form>

      <div className="flex flex-col items-center gap-2 mt-4">
        <p>
          ¿Aún no tienes cuenta?{' '}
          <Link href="/signup" className="text-red-600 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
