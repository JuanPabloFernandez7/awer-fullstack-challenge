'use client';

import { useState, useEffect } from 'react';
import { fetchTasks as apiFetchTasks, createTask as apiCreateTask } from '../api/tasks';
import Header from '../components/Header';
import ErrorAlert from '../components/ErrorAlert';
import TaskAccordion from '../components/TaskAccordion';
import Pagination from '../components/Pagination';
import TaskModal from '../components/TaskModal';


export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);
  const tasksPerPage = 5;

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiFetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setFieldErrors({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTitle('');
    setDescription('');
    setFieldErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    try {
      setSubmitting(true);
      setError(null);
      const newTask = await apiCreateTask({ title: title.trim(), description: description.trim() });
      setTasks([...tasks, newTask]);
      handleCloseModal();
      setCurrentPage(Math.ceil((tasks.length + 1) / tasksPerPage));
    } catch (err) {
      if (err.validationErrors) {
        setFieldErrors(err.validationErrors);
      } else {
        setError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const toggleAccordion = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <div className="bg-light min-vh-100 py-5">
          <div className="container" style={{ maxWidth: '900px' }}>
            <Header onNewTask={handleOpenModal} />
            <ErrorAlert error={error} onClose={() => setError(null)} />

            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h5 fw-semibold mb-4">
                  Mis Tareas <span className="badge bg-primary ms-2">{tasks.length}</span>
                </h2>

                {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                    </div>
                ) : (
                    <>
                      <TaskAccordion tasks={currentTasks} expandedTask={expandedTask} toggleAccordion={toggleAccordion} indexOffset={indexOfFirstTask} />
                      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={paginate} />
                    </>
                )}
              </div>
            </div>
          </div>
        </div>

        <TaskModal
            show={showModal}
            title={title}
            description={description}
            fieldErrors={fieldErrors}
            submitting={submitting}
            onClose={handleCloseModal}
            onChangeTitle={setTitle}
            onChangeDescription={setDescription}
            onSubmit={handleSubmit}
        />
      </>
  );
}
