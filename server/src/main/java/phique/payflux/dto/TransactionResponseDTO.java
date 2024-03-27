package phique.payflux.dto;

import phique.payflux.model.Transaction;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

public record TransactionResponseDTO(UUID id, String name_trade, String type_trade, double amount, String tag, Date date) {
    public TransactionResponseDTO(Transaction transaction) {
        this(transaction.getId(), transaction.getName_trade(), transaction.getType_trade(), transaction.getAmount(), transaction.getTag(), transaction.getDate());
    }
}
