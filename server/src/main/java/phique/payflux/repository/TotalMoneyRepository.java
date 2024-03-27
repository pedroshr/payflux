package phique.payflux.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phique.payflux.model.TotalMoney;

import java.math.BigDecimal;

public interface TotalMoneyRepository extends JpaRepository<TotalMoney, Long> {
}
