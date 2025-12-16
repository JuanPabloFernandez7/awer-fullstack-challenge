package com.awer.backend.controller;

import com.awer.backend.dto.TaskRequestDto;
import com.awer.backend.model.Task;
import com.awer.backend.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService ts;

    public TaskController(TaskService ts) {
        this.ts = ts;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return ts.getAllTasks();
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@Valid @RequestBody TaskRequestDto taskRequestDto) {
        Task savedTask = ts.createTask(taskRequestDto.getTitle(), taskRequestDto.getDescription());
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

}
