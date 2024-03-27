package phique.payflux.model;

import jakarta.persistence.*;
import lombok.*;
import phique.payflux.dto.TransactionRequestDTO;
import phique.payflux.dto.TransactionResponseDTO;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Table(name = "transactions")
@Entity(name = "transactions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "name_trade")
    private String name_trade;
    @Column(name = "type_trade")
    private String type_trade;
    @Column(name = "amount")
    private double amount;
    @Column(name = "tag")
    private String tag;
    @Column(name = "date_trade")
    private Date date;

    public Transaction(TransactionRequestDTO data) {
        this.name_trade = data.name_trade();
        this.type_trade = data.type_trade();
        this.amount = data.amount();
        this.tag = data.tag();
        this.date = data.date();
    }
    public Transaction(TransactionResponseDTO data) {
        this.id = data.id();
        this.name_trade = data.name_trade();
        this.type_trade = data.type_trade();
        this.amount = data.amount();
        this.tag = data.tag();
        this.date = data.date();
    }
}
