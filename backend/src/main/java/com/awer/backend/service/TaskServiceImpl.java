package com.awer.backend.service;

import com.awer.backend.model.Task;
import com.awer.backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{

    private final TaskRepository tr;

    public TaskServiceImpl(TaskRepository tr){
        this.tr = tr;
    }

    @Override
    public List<Task> getAllTasks() {
        return tr.findAll();
    }

    @Override
    public Task createTask(String title, String description) {
        Task task = new Task();
        task.setTitle(title);
        task.setDescription(description);
        return tr.save(task);
    }

}
