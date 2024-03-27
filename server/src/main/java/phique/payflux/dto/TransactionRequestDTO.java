package phique.payflux.dto;

import phique.payflux.model.Transaction;

import java.math.BigDecimal;
import java.util.Date;

public record TransactionRequestDTO(String name_trade, String type_trade, double amount, String tag, Date date) {
    public TransactionRequestDTO(Transaction transaction) {
        this(transaction.getName_trade(), transaction.getType_trade(), transaction.getAmount(), transaction.getTag(), transaction.getDate());
    }
}
