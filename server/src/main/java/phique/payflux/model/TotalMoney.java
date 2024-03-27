package phique.payflux.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity(name = "TotalMoney")
@Table(name = "totalmoney")
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class TotalMoney {
    @Id
    private Long id = 1L;
    private BigDecimal total_amount;
}
