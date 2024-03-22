package phique.payflux.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import phique.payflux.dto.TransactionRequestDTO;
import phique.payflux.dto.TransactionResponseDTO;
import phique.payflux.model.Transaction;
import phique.payflux.repository.TransactionRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all")
    public List<TransactionResponseDTO> getAllTransaction() {
        List<TransactionResponseDTO> transactionList = repository.findAll().stream().map(TransactionResponseDTO::new).toList();
        return transactionList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Optional<Transaction> getTransactionById(@PathVariable("id") UUID id) {
        Optional<Transaction> transaction = repository.findById(id);
        return transaction;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void addTransaction(@RequestBody TransactionRequestDTO data) {
        Transaction transactionData = new Transaction(data);
        repository.save(transactionData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping()
    public void editTransaction(@RequestBody TransactionResponseDTO data) {
        Transaction transactionData = new Transaction(data);
        repository.save(transactionData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteTransactionById(@PathVariable("id") UUID id) {
        repository.deleteById(id);
    }

}
