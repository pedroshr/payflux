package phique.payflux.dto;

import java.util.Date;

public record TransactionRequestDTO(String name_trade, String type_trade, double amount, String tag, Date date) {
}
