import { auth, store } from "../firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateUser = (user) => {
    const { userEmail, userPassword } = user;

    return new Promise((resolve, reject) => {
        auth
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then(async res => {
            console.log(res);
            const userRegister = await SetRegisterUser(user) 
        })
        .catch(err => {
            if (err.code === "auth/invalid-email") {
                reject("Formato de Email incorrecto");
              }
      
              if (err.code === "auth/weak-password") {
                reject("La contraseña debe de ser de almenos 6 caracteres.");
              }            
        })
    });
};

const SetRegisterUser = (user) => {
    const userRegister = {
        Name: user.Name,
        LastName: user.LastName,
        IsActive: true,
        CreatedDate: new Date()
    };
    return new Promise((resolve, reject) => {
        const appUser = await store.collection("AppUsers").add(userRegister);

        if(appUser && appUser.id.length > 0) {
            //Se realiza login automatico :)
            resolve(200);
        }

        reject("No se pudo crear el usuario");
    });
};

const Login = (userEmail, userPassword) => {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((res) => {
        console.log(res);
        resolve(200);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          reject("Usuario no registrado");
        }

        if (err.code === "auth/wrong-password") {
          reject("La contraseña es incorrecta.");
        }
      });
  });
};

export { CreateUser, Login };
