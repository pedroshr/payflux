package phique.payflux.dto;

import java.math.BigDecimal;
import java.util.List;

public record DashboardResponseDTO (double totalIn, double totalOut, List<TransactionResponseDTO> latestTransaction) {
}
