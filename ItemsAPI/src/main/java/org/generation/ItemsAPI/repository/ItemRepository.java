package org.generation.ItemsAPI.repository;

import org.generation.ItemsAPI.repository.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
