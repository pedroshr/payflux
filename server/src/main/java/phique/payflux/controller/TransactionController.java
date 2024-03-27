package phique.payflux.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import phique.payflux.dto.DashboardResponseDTO;
import phique.payflux.dto.TransactionRequestDTO;
import phique.payflux.dto.TransactionResponseDTO;
import phique.payflux.model.TotalMoney;
import phique.payflux.model.Transaction;
import phique.payflux.repository.TotalMoneyRepository;
import phique.payflux.repository.TransactionRepository;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionRepository repository;
    @Autowired
    private TotalMoneyRepository money_repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all")
    public List<TransactionResponseDTO> getAllTransaction() throws Exception {
        List<TransactionResponseDTO> transactionList = repository.findAll().stream().map(TransactionResponseDTO::new).toList();
        return transactionList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all/in")
    public List<TransactionResponseDTO> getAllInTransaction() {
        List<TransactionResponseDTO> transactionList = repository.findAll()
                .stream()
                .map(TransactionResponseDTO::new)
                .collect(Collectors.toList());

        Iterator<TransactionResponseDTO> iterator = transactionList.iterator();
        while (iterator.hasNext()) {
            TransactionResponseDTO transaction = iterator.next();
            if (transaction.type_trade().equals("out")) {
                iterator.remove();
            }
        }
        return transactionList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all/out")
    public List<TransactionResponseDTO> getAllOutTransaction() {
        List<TransactionResponseDTO> transactionList = repository.findAll()
                .stream()
                .map(TransactionResponseDTO::new)
                .collect(Collectors.toList());

        Iterator<TransactionResponseDTO> iterator = transactionList.iterator();
        while (iterator.hasNext()) {
            TransactionResponseDTO transaction = iterator.next();
            if (transaction.type_trade().equals("in")) {
                iterator.remove();
            }
        }
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
        repository.save(new Transaction(data));

        TotalMoney totalMoney = money_repository.findById(1L).orElseThrow();
        if (data.type_trade().equals("in")) {
            totalMoney.setTotal_amount(totalMoney.getTotal_amount().add(BigDecimal.valueOf(data.amount())));
        } else if (data.type_trade().equals("out")) {
            totalMoney.setTotal_amount(totalMoney.getTotal_amount().subtract(BigDecimal.valueOf(data.amount())));
        }
        money_repository.save(totalMoney);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping
    public void editTransaction(@RequestBody TransactionResponseDTO data) throws Exception {
        TransactionResponseDTO previousTransaction = repository.findById(data.id()).map(TransactionResponseDTO::new).orElseThrow(() -> new Exception("Previous transaction not find."));
        if (data.type_trade().equals(previousTransaction.type_trade())) {
            repository.save(new Transaction(data));

            TotalMoney totalMoney = money_repository.findById(1L).orElseThrow();

            BigDecimal previousAmount = BigDecimal.valueOf(previousTransaction.amount());
            BigDecimal newAmount = BigDecimal.valueOf(data.amount());
            BigDecimal difference = new BigDecimal(0);
            if (data.type_trade().equals("in")) {
                if (previousAmount.compareTo(newAmount) < 0) { //previousAmount < newAmount
                    difference = newAmount.subtract(previousAmount);
                    totalMoney.setTotal_amount(totalMoney.getTotal_amount().add(difference));

                } else if (previousAmount.compareTo(newAmount) > 0) { //previousAmount > newAmount
                    difference = previousAmount.subtract(newAmount);
                    totalMoney.setTotal_amount(totalMoney.getTotal_amount().subtract(difference));
                }
            } else if (data.type_trade().equals("out")) {
                if (previousAmount.compareTo(newAmount) < 0) { //previousAmount < newAmount
                    difference = newAmount.subtract(previousAmount);
                    totalMoney.setTotal_amount(totalMoney.getTotal_amount().subtract(difference));

                } else if (previousAmount.compareTo(newAmount) > 0) { //previousAmount > newAmount
                    difference = previousAmount.subtract(newAmount);
                    totalMoney.setTotal_amount(totalMoney.getTotal_amount().add(difference));
                }
            }
            money_repository.save(totalMoney);
        } else {
            throw new Exception("Is not possible change the type of transaction.");
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteTransactionById(@PathVariable("id") UUID id) throws Exception {
        TransactionResponseDTO transactionDelete = repository.findById(id).map(TransactionResponseDTO::new).orElseThrow(() -> new Exception("The transition with this ID is not found."));
        ;

        repository.deleteById(id);

        TotalMoney totalMoney = money_repository.findById(1L).orElseThrow();
        if (transactionDelete.type_trade().equals("in")) {
            totalMoney.setTotal_amount(totalMoney.getTotal_amount().subtract(BigDecimal.valueOf(transactionDelete.amount())));
        } else if (transactionDelete.type_trade().equals("out")) {
            totalMoney.setTotal_amount(totalMoney.getTotal_amount().add(BigDecimal.valueOf(transactionDelete.amount())));
        }
        money_repository.save(totalMoney);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/dashboard")
    public DashboardResponseDTO getDashboard() {
        List<TransactionResponseDTO> transactionList = repository.findAll().stream().map(TransactionResponseDTO::new).toList();
        double totalOut = transactionList.stream()
                .filter(transaction -> transaction.type_trade().equals("out"))
                .mapToDouble(TransactionResponseDTO::amount)
                .sum();

        double totalIn = transactionList.stream()
                .filter(transaction -> transaction.type_trade().equals("in"))
                .mapToDouble(TransactionResponseDTO::amount)
                .sum();
        List<TransactionResponseDTO> latestList = repository.findAll().stream()
                .map(TransactionResponseDTO::new).sorted(Comparator.comparing(TransactionResponseDTO::date)
                        .reversed()).limit(5).collect(Collectors.toList());
        return new DashboardResponseDTO(totalIn, totalOut, latestList);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/balance")
    public BigDecimal getBalance() {
        TotalMoney totalMoney = money_repository.findById(1L).orElseThrow();
        return totalMoney.getTotal_amount();
    }
}
