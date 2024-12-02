// import { create } from 'zustand';


// interface AuthState {
//   role: "Administrador" | "Usuario" | "Invitado";
//   setRole: (role: "Administrador" | "Usuario" | "Invitado") => void;
//   permissions: Record<string, string[]>;
// }

// const AuthStore = create<AuthState>((set) => ({
//   role: "Invitado", // Rol inicial
//   setRole: (role) => set(() => ({ role })),
//   permissions: {
//     Administrador: ["/Lista_Usuario", "/Lista_Comentarios", "/Perfil_Usuario", "/Home"],
//     Usuario: ["/Comentar", "/Perfil_Usuario", "/Home", "/Tipos_Desarrollo"],
//     Invitado: ["/Login", "/Registro", "/Nosotros", "/Home"],
//   },
// }));

// export default AuthStore;