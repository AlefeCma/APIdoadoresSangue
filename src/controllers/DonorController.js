import Donor from '../models/Donor.js';
import { cpf } from 'cpf-cnpj-validator'; // Importando a função de validação de CPF

// Rota para cadastrar doador (CREATE)
async function createDonor(request, response) {
    // Pega os dados do doador do corpo da requisição
    const donor = request.body;
    // Se donationHistory não existir, inicializa como um array vazio
    donor.donationHistory = donor.donationHistory || [];
    const newDonor = new Donor(donor); // Cria um novo doador com os dados fornecidos

    try {
        //  Verifica se o CPF é válido
        if (!cpf.isValid(donor.CPF)) {
            return response.status(400).json({ error: 'O CPF fornecido não é válido.' });
        }
        // Procura por um doador existente com o mesmo CPF
        const existingDonor = await Donor.findOne({ CPF: donor.CPF });
        if (existingDonor) {
            return response.status(400).json({ error: 'Um doador com os mesmos dados já existe.' });
        }

        // Calcula a idade do doador
        const birthDate = new Date(donor.birthDate);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        // Verifica se a idade está entre 18 e 69 anos
        if (age < 18 || age > 69) {
            return response.status(400).json({ error: 'A data de nascimento deve ser anterior à data atual.' });
        }

        // Salva o novo doador no banco de dados
        await newDonor.save();
        response.status(201).json({ message: 'Doador cadastrado com sucesso!' });
    } catch (error) {
        // Em caso de erro, retorna uma mensagem de erro
        console.error(error.message);
        response.status(500).json({ error: "Ocorreu um erro ao cadastrar o doador. Por favor, tente novamente." });
    }
}

// Rota para obter doadores (READ)
async function getDonor(request, response) {
    const { id } = request.params; // Pega o id dos parâmetros da requisição

    try {
        let donor;
        if (id) {
            // Se um id foi fornecido, procura pelo doador correspondente
            donor = await Donor.findById(id);
        } else {
            // Retorna todos os doadores se nenhum id for fornecido
            let donors = await Donor.find({});
            if (donors.length === 0) {
                return response.status(404).json({ error: 'Nenhum doador encontrado' });
            }
            return response.status(200).json(donors); // Retorna todos os doadores encontrados.
        }

        if (!donor) {
            response.status(404).json({ error: `ID ${id} não corresponde a nenhum doador` });
        } else {
            response.status(200).json(donor); // Retorna o doador correspondente ao id fornecido.
        }
    } catch (error) {
        if (id) {
            console.error(error.message);
            return response.status(500).json({ error: "Ocorreu um erro ao buscar o doador. Por favor, tente novamente." });
        } else {
            console.error(error.message);
            return response.status(500).json({ error: "Ocorreu um erro ao buscar doadores. Por favor, tente novamente." });
        }
    }
}

// Rota para atualizar um doador (UPDATE)
async function updateDonor(request, response) {
    const { id } = request.params; // Pega o id dos parâmetros da requisição
    try {
        // Atualiza o doador correspondente ao id fornecido com os novos dados fornecidos no corpo da requisição
        const updatedDonor = await Donor.findByIdAndUpdate(id, request.body, { new: true });
        if (!updatedDonor) {
            response.status(404).json({ error: `ID ${id} não corresponde a nenhum doador` });
        } else {
            response.status(200).json({ message: `Doador com ID ${id} atualizado com sucesso!` }); // Retorna sucesso se o doador for atualizado corretamente
        }
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Ocorreu um erro ao atualizar o doador. Por favor, tente novamente." });
    }
}

// Rota para deletar um doador (DELETE)
async function deleteDonor(request, response) {
    const { id } = request.params; // Pega o id dos parâmetros da requisição
    try {
        // Remove o doador correspondente ao id fornecido
        const removedDonor = await Donor.findByIdAndRemove(id);
        if (!removedDonor) {
            response.status(404).json({ error: `ID ${id} não corresponde a nenhum doador` });
        } else {
            response.status(200).json({ message: `Doador com ID ${id} deletado com sucesso!` }); // Retorna sucesso se o doador for removido corretamente
        }
    } catch (error) {
        // Em caso de erro, retorna uma mensagem de erro
        console.error(error.message);
        response.status(500).json({ error: "Ocorreu um erro ao remover o doador. Por favor, tente novamente." });
    }
}

export { createDonor, getDonor, updateDonor, deleteDonor }; // Exporta as funções para serem usadas em outros arquivos