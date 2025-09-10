import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
         <form style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      width: '300px',
      margin: '100px auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>

      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your email</label>
      <input
        type="email"
        id="email"
        placeholder="name@company.com"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
      <input
        type="password"
        id="password"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Comfirm Password</label>
      <input
        type="password"
        id="password"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Login an account
      </button>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Already have an account?{' '}
        <Link to={'/login'} style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
      </p>
    </form>

    </div>
  )
}
