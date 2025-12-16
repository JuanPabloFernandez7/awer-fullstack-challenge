package com.awer.backend.controller;

import com.awer.backend.model.Task;
import com.awer.backend.service.TaskService;
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
    public Task createTask(@RequestBody Task task) {
        return ts.createTask(task);
    }
}
