package com.awer.backend.service;

import com.awer.backend.model.Task;

import java.util.List;

public interface TaskService {

    List<Task> getAllTasks();

    Task createTask(Task tastk);

}
