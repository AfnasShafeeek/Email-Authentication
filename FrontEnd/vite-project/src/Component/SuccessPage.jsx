import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate =useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✓</div>
        <h1 style={styles.title}>Success!</h1>
        <p style={styles.message}>Your action was completed successfully.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.primaryButton} onClick={()=>{navigate('/')}}>Continue</button>
          <button style={styles.secondaryButton} onClick={()=>{navigate('/')}}>Back Home</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  icon: {
    fontSize: '60px',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  title: {
    color: '#4CAF50',
    margin: '0 0 15px 0',
  },
  message: {
    color: '#666',
    marginBottom: '30px',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#4CAF50',
    border: '1px solid #4CAF50',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SuccessPage;