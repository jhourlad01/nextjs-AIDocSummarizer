'use client';

import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import CloudUpload from '@mui/icons-material/CloudUpload';
import Description from '@mui/icons-material/Description';
import Download from '@mui/icons-material/Download';
import Upload from '@mui/icons-material/Upload';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface FileItem {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  summary?: string;
}

export default function Home() {
  const [files] = useState<FileItem[]>([
    {
      id: '1',
      name: 'sample-document.pdf',
      size: '2.3 MB',
      uploadedAt: '2024-01-15',
      status: 'completed',
      summary:
        'This document discusses the implementation of machine learning algorithms in modern software development. It covers various approaches including supervised learning, unsupervised learning, and reinforcement learning. The document provides practical examples and best practices for integrating ML into existing systems.',
    },
    {
      id: '2',
      name: 'research-paper.docx',
      size: '1.8 MB',
      uploadedAt: '2024-01-14',
      status: 'completed',
      summary:
        'A comprehensive analysis of renewable energy sources and their impact on global sustainability. The research examines solar, wind, and hydroelectric power generation methods, comparing their efficiency, cost-effectiveness, and environmental benefits.',
    },
  ]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(files[0]);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  const handleFileSelect = (file: FileItem) => {
    setSelectedFile(file);
  };

  const getStatusColor = (status: FileItem['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'warning';
      case 'uploading':
        return 'info';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: FileItem['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'uploading':
        return 'Uploading';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        pb: 2,
      }}
    >
      {/* App Bar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(255,255,255,0.85)',
          color: 'text.primary',
          boxShadow: '0 2px 16px 0 rgba(60,60,67,0.04)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e5ea',
          mb: 2,
        }}
      >
        <Toolbar sx={{ minHeight: 64 }}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              mr: 2,
              width: 40,
              height: 40,
              boxShadow: 1,
            }}
          >
            <Description fontSize="medium" />
          </Avatar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 0.5 }}
          >
            Summarizer
          </Typography>
          <Button
            color="primary"
            variant="contained"
            startIcon={<Upload />}
            onClick={() => setUploadDialogOpen(true)}
            sx={{ borderRadius: 8, boxShadow: 'none', fontWeight: 500 }}
          >
            Upload
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          gap: 3,
          px: { xs: 0, md: 3 },
          pt: 2,
          width: '100%',
        }}
      >
        {/* File List Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: 320,
            minWidth: 0,
            maxWidth: 360,
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: 2,
            mt: 1,
            mb: 2,
            boxShadow: '0 4px 24px 0 rgba(60,60,67,0.06)',
            display: { xs: 'none', md: 'block' },
            height: 'calc(90vh - 80px)',
            overflow: 'auto',
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ mb: 1, letterSpacing: 0.2 }}
          >
            Documents
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List sx={{ p: 0 }}>
            {files.map(file => (
              <ListItem
                key={file.id}
                selected={selectedFile?.id === file.id}
                onClick={() => handleFileSelect(file)}
                sx={{
                  cursor: 'pointer',
                  bgcolor:
                    selectedFile?.id === file.id
                      ? 'rgba(0,122,255,0.06)'
                      : 'background.paper',
                  borderLeft:
                    selectedFile?.id === file.id
                      ? '3px solid #007aff'
                      : '3px solid transparent',
                  mb: 0.5,
                  px: 1.5,
                  py: 1.2,
                  minHeight: 44,
                  borderRadius: 0,
                  boxShadow: 'none',
                  transition: 'background 0.2s, border 0.2s',
                }}
              >
                <Typography
                  fontWeight={selectedFile?.id === file.id ? 600 : 400}
                  fontSize={15}
                  noWrap
                >
                  {file.name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            minHeight: '80vh',
          }}
        >
          {selectedFile ? (
            <>
              {/* File Header */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  mb: 2,
                  background: 'rgba(255,255,255,0.95)',
                  boxShadow: '0 2px 16px 0 rgba(60,60,67,0.04)',
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ letterSpacing: 0.2 }}
                    >
                      {selectedFile.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedFile.size} • Uploaded {selectedFile.uploadedAt}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Button
                      startIcon={<Download />}
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: 2, fontWeight: 500 }}
                    >
                      Download
                    </Button>
                    <Chip
                      label={getStatusText(selectedFile.status)}
                      color={
                        getStatusColor(selectedFile.status) as
                          | 'success'
                          | 'warning'
                          | 'info'
                          | 'error'
                          | 'default'
                      }
                      sx={{
                        borderRadius: 2,
                        fontWeight: 500,
                        fontSize: 13,
                        background: '#f2f2f7',
                        color: '#007aff',
                      }}
                    />
                  </Stack>
                </Stack>
              </Paper>

              {/* Summary Content */}
              <Card
                elevation={1}
                sx={{
                  borderRadius: 4,
                  background: '#fff',
                  boxShadow: '0 1.5px 8px rgba(60,60,67,0.08)',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ mb: 2, letterSpacing: 0.2 }}
                  >
                    AI Summary
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.primary',
                      fontSize: 17,
                    }}
                  >
                    {selectedFile.summary ||
                      'No summary available yet. The document is being processed...'}
                  </Typography>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Empty State */
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
                minHeight: 400,
                background: 'rgba(255,255,255,0.95)',
                borderRadius: 4,
                boxShadow: '0 2px 16px 0 rgba(60,60,67,0.04)',
              }}
            >
              <CloudUpload
                sx={{ fontSize: 64, color: 'primary.main', mb: 2 }}
              />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                No Document Selected
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 3 }}
              >
                Select a document from the list to view its AI-generated
                summary, or upload a new document to get started.
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setUploadDialogOpen(true)}
                sx={{ borderRadius: 2, fontWeight: 500 }}
              >
                Upload Document
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Upload Dialog */}
      <Dialog
        open={uploadDialogOpen}
        onClose={() => setUploadDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, letterSpacing: 0.2 }}>
          Upload Document
          <IconButton
            aria-label="close"
            onClick={() => setUploadDialogOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Drop your document here
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Supported formats: PDF, DOCX, TXT, RTF
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<Upload />}
              sx={{ borderRadius: 2, fontWeight: 500 }}
            >
              Choose File
              <input
                type="file"
                hidden
                accept=".pdf,.docx,.txt,.rtf"
                multiple
              />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setUploadDialogOpen(false)}
            sx={{ borderRadius: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => setUploadDialogOpen(false)}
            sx={{ borderRadius: 2, fontWeight: 500 }}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="upload"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          borderRadius: 3,
          boxShadow: '0 4px 24px 0 rgba(0,122,255,0.10)',
        }}
        onClick={() => setUploadDialogOpen(true)}
      >
        <Add />
      </Fab>
    </Box>
  );
}
