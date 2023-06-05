import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" max-w-[500px] mx-auto flex flex-col gap-2 items-center">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="btn w-1/2 ">
        Sign In
      </button>
    </div>
  );
};
