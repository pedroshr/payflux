package phique.payflux.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phique.payflux.model.Transaction;

import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {
}
