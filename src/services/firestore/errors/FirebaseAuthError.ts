export class FirebaseAuthError extends Error {
    constructor(message?: string) {
        super(message ?? 'Não possível recuperar os dados de autenticação do usuário.');

        this.message = message ?? 'Não possível recuperar os dados de autenticação do usuário.';
        this.name = 'FirebaseAuthError';
    }
}
