export default function Form() {
  return (
    <form>
      <label>
        Nome do serviço
        <input
          type="text"
          name="name"
        />
      </label>

      <label>
        Login
        <input
          type="text"
          name="login"
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="senha"
        />
      </label>
      <label>
        URL
        <input
          type="text"
          name="url"
        />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}
